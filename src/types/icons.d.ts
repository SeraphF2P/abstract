import type  {SVGProps,SVGSVGElement} from "react";


declare module "@/components/Icons" {
  interface icon extends JSX.IntrinsicElements.svg {
    [key: SVGProps<SVGSVGElement>];
  }
}

