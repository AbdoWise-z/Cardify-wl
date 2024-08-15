"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "../ui/button";

import { useForm } from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {ModalType, useModal} from "@/hooks/use-modal";
import {Input} from "@/components/ui/input";
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp";
import axios from "axios";
import {toast} from "sonner";
import {useEffect, useState} from "react";

const formSchema = z.object({
  code: z.string().trim().min(6 , "code must be a 6-digit number").max(6, "code must be a 6-digit number"),
});

export const VerifyAccountModel = () => {

  const modal = useModal();
  const isOpen = modal.isOpen && modal.type == ModalType.VERIFY_ACCOUNT_MODAL;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    }
  });

  const [failed , setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
    form.reset();
  } , [modal.data , form]);

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post("/api/verify" , {
        email: modal.data.email,
        code: values.code,
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
        setFailed(true);
      }
      form.reset();
    } catch (e) {
      console.log(e);
      toast("Some Error happened ..", {
        description: `Maybe check your internet ?`,
        action: {
          label: "OK",
          onClick: () => {},
        },
      });
    }
  };

  const handleClose = () => {
    form.reset();
    modal.close();
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open?) => {
      handleClose();
    }}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6" >
          <DialogTitle className="text-2xl text-left font-bold" >
            Verify Account
          </DialogTitle>
          <DialogDescription className="text-left text-zinc-500">
            We have sent an account verification code to <span className={"text-yellow-500 inline"}> {modal.data.email ?? "test@test.com"}</span>, please type the code blow.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-8 py-4">
              <FormField
                control={form.control}
                name="code"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>

                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              {failed && <p className={"text-red-500 text-sm"}>Entered code is wrong.</p>}
            </div>
            <DialogFooter className="bg-gray-100 px-2 py-6">
              <Button disabled={isLoading} variant={"secondary"}>
                Pre-Register
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}