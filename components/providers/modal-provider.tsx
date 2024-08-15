"use client";

import React, {useEffect} from 'react';

import {VerifyAccountModel} from "@/components/modals/verify-account-model";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <VerifyAccountModel/>
    </>
  );
};

export default ModalProvider;