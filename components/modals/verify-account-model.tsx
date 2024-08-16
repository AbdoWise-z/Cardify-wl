"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


import { Button } from "../ui/button";

import { useForm } from "react-hook-form";
import {ModalType, useModal} from "@/hooks/use-modal";
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp";
import axios from "axios";
import {toast} from "sonner";
import {useEffect, useRef, useState} from "react";
import {CircularProgress} from "@mui/material";

export const VerifyAccountModel = () => {

  const modal = useModal();
  const isOpen = modal.isOpen && modal.type == ModalType.VERIFY_ACCOUNT_MODAL;

  const ref = useRef<HTMLInputElement>(null);
  const [state, setState] = useState({
    submitting: false,
    error: false,
    errorStr: "",
  })

  useEffect(() => {
    setState({
      submitting: false,
      error: false,
      errorStr: "",
    })
  }, [modal.data.email]);

  const doSubmit = async (code: string) => {
    try {
      setState({
        submitting: true,
        error: false,
        errorStr: ""
      })

      const res = await axios.post("/api/verify" , {
        email: modal.data.email ?? "aaa@gmail.com",
        code: code,
      });

      const data = res.data;

      if (data.status == 200){
        toast("Account Pre-registered!", {
          description: `The account ${modal.data.email} has been pre-registered, thanks for your support.`,
          action: {
            label: "Cool",
            onClick: () => {},
          },
        });

        modal.close();
      } else {
        setState({
          submitting: false,
          error: true,
          errorStr: "The entered code is wrong."
        })
      }
    } catch (e) {
      console.log(e);
      toast("Some Error happened ..", {
        description: `Maybe check your internet ?`,
        action: {
          label: "OK",
          onClick: () => {},
        },
      });

      setState({
        submitting: false,
        error: false,
        errorStr: ""
      })
    }
  };


  // Handle form submission
  const handleSubmit = () => {
    const code = ref.current?.value;
    if (!code || code.length < 6){
      setState({
        submitting: false,
        error: true,
        errorStr: "Please enter a valid code."
      })

      return;
    }

    doSubmit(code);

  };

  const handleClose = () => {
    modal.close();
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open?) => {
      handleClose();
    }}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Verify Your Code</DialogTitle>
          <DialogDescription>
            Please enter the 6-digit code sent to your email address to verify your account.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4 flex flex-col">
          <InputOTP maxLength={6} ref={ref}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className={"text-rose-400"} >{state.error ? state.errorStr : " "}</p>
          <Button type="submit" className="ml-auto w-[40%]" onClick={handleSubmit} disabled={state.submitting}>
            {!state.submitting && ("Verify Code")}

            {state.submitting && (
              <div className={"scale-50"}>
                <svg width={0} height={0}>
                  <defs>
                    <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e01cd5"/>
                      <stop offset="100%" stopColor="#1CB5E0"/>
                    </linearGradient>
                  </defs>
                </svg>
                <CircularProgress sx={{'svg circle': {stroke: 'url(#my_gradient)'}}} className={"w-full h-full"}/>
              </div>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}