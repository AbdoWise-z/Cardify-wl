"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {cn, delay} from "@/lib/utils";
import {ChevronRight} from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {CircularProgress} from "@mui/material";
import axios from "axios";
import {toast} from "sonner";
import {ModalType, useModal} from "@/hooks/use-modal";
import Mounted from "@/components/utility/mounted";
import {useEffect, useState} from "react";

const formSchema = z.object({
  email: z.string().min(1 , "We need to know your email :)").email("Please enter a valid email address"),
});

export const EmailInputForm = () => {


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    }
  });

  const modal = useModal();

  const isLoading = form.formState.isSubmitting;
  
  const [active , setActive] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post("/api/pre-register" , {
        email: values.email,
      });

      const data = res.data;

      if (data.status == 200){
        //open verify model
        modal.open(ModalType.VERIFY_ACCOUNT_MODAL , {
          email: values.email,
        });
      } else if (data.status == 201){
        //already pre-registered
        toast("Account Already Pre-registered", {
          description: `The account ${values.email} has already pre-registered once`,
          action: {
            label: "OK",
            onClick: () => {},
          },
        });
      }

      form.reset();
    } catch (e) {
      console.log(e);
      toast("Some Error happened ..", {
        description: `${JSON.stringify(e)}`,
        action: {
          label: "OK",
          onClick: () => {},
        },
      });
    }
  };

  
  return (
    <Mounted>
      <div className={cn(
        "w-[70%] md:w-[35%] lg:w-[25%] flex flex-row p-4 bg-neutral-900/70 rounded-xl border-2 border-amber-950 mt-4",
        "hover:border-cyan-950 hover:rounded-2xl hover:py-6 transition-all",
        active && "border-yellow-400 hover:border-yellow-400 rounded-2xl py-6",
        active && "w-[80%] md:w-[40%] lg:w-[30%]",
      )}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={"flex flex-1"}>
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem
                  className={"w-full"}
                >
                  <FormControl>
                    <Input
                      onFocus={(v) => {
                        const a = document.getElementById("reg-email-input") == document.activeElement;
                        setActive(a);
                      }}
                      id={"reg-email-input"}
                      disabled={isLoading}
                      className="bg-zinc-800/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 space-x-0 space-y-0 px"
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </form>
        </Form>

        <Tooltip>
          <TooltipContent>
            Pre-register
          </TooltipContent>
          <TooltipTrigger asChild>
            <Button size={"icon"} className={"ml-4 group overflow-hidden"} variant="secondary" onClick={() => {
              form.handleSubmit(onSubmit)();
              console.log("hello ???");
            }}>
              {!isLoading && (<>
                <div className={cn(
                  "absolute transition-all",
                  "group-hover:translate-x-[100%] group-hover:opacity-0"
                )}>
                  <ChevronRight/>
                </div>

                <div className={cn(
                  "absolute transition-all translate-x-[-100%] opacity-0",
                  "group-hover:translate-x-[20%] group-hover:opacity-100"
                )}>
                  <ChevronRight/>
                </div>

                <div className={cn(
                  "absolute transition-all translate-x-[-100%] opacity-0",
                  "group-hover:translate-x-[-20%] group-hover:opacity-100"
                )}>
                  <ChevronRight/>
                </div>
              </>)}

              {isLoading && (
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
          </TooltipTrigger>
        </Tooltip>
      </div>
    </Mounted>
  );
}