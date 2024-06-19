

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

import { Card, CardContent } from "@/components/ui/card";
import { FaCopy } from "react-icons/fa";
import { useRef } from "react";

const NavComponent = () => {

    const textRef = useRef();
const copyToClipboard = () => {
  // Text from the html element
  let copyText = textRef.current.value;
  // Adding text value to clipboard using copy function
  let isCopy = copy(copyText);

  //Dispalying notification
  if (isCopy) {
    toast.success("Copied to Clipboard");
  }
};

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="hidden"></Button>
      </DrawerTrigger>
      <DrawerContent className="bg-black-500 h-full w-full">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-white font-bold">LinkedIn</DrawerTitle>
            <DrawerDescription className="text-white">
                {" your daily activity goal."}
            </DrawerDescription>
          </DrawerHeader>
          <Card className="cursor-pointer p-10 bg-transparent">
            <a rel="noopener noreferrer">
              <CardContent className="flex items-center space-x-4">
                <img src="/p.jpg" className="rounded-full h-20" alt="" />
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">Channel Name</h4>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm text-white">
                    <input
                      type="text"
                      value="https://www.facebook.com/k.dean.1420354/"
                      disabled
                      className="text-neutral-500 bg-transparent"
                      ref={textRef}
                    />
                    <FaCopy onClick={copyToClipboard} />
                  </div>
                </div>
              </CardContent>
            </a>
          </Card>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default NavComponent