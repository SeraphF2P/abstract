"use client"
import { FC, HTMLAttributes, ReactNode } from 'react'
import Btn from './Btn';
import { toast } from './toast';

interface NotifyBtnProps {
  title?: string;
  message: string;
  type?: "success" | "error" | "default" | "info" | "warn" | undefined;
  children : ReactNode;
}

export const NotifyBtn: FC<NotifyBtnProps> = ({
          children,
          title,
          message,
          type = "default"}) => {
  return (
    <Btn
      onClick={() => {
        toast({
          title,
          message,
          type,
        });
      }}
      variant="fill"
    >
      {children}
    </Btn>
  );
}

