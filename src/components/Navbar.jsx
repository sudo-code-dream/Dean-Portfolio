import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";

// import * as React from "react";
import { useRef } from "react";

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

const Navbar = () => {
  const textRef = useRef();
  const openref1 = useRef(null);
  const openref2 = useRef(null);
  const openref3 = useRef(null);
  const openref4 = useRef(null);

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
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="mx-2 w-20" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          className="hover:text-purple-600 rounded-lg"
          onClick={() => openref1.current.click()}
        />
        <FaGithub
          className="hover:bg-sky-500 rounded-lg"
          onClick={() => openref2.current.click()}
        />
        <FaInstagram
          className="hover:bg-sky-500 rounded-lg"
          onClick={() => openref3.current.click()}
        />
        <FaSquareXTwitter
          className="hover:bg-sky-500 rounded-lg"
          onClick={() => openref4.current.click()}
        />
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="hidden" ref={openref1}></Button>
        </DrawerTrigger>
        <DrawerContent className="bg-black-500 h-full w-full">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-white font-bold">
                LinkedIn
              </DrawerTitle>
              <DrawerDescription className="text-white"></DrawerDescription>
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
                        placeholder="k.dean.1420354"
                        value="N/A"
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
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="hidden" ref={openref2}></Button>
        </DrawerTrigger>
        <DrawerContent className="bg-black-500 h-full w-full">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-white font-bold">Github</DrawerTitle>
              <DrawerDescription className="text-white"></DrawerDescription>
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
                        value="https://github.com/sudo-code-dream"
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
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="hidden" ref={openref3}></Button>
        </DrawerTrigger>
        <DrawerContent className="bg-black-500 h-full w-full">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-white font-bold">
                Instagram
              </DrawerTitle>
              <DrawerDescription className="text-white"></DrawerDescription>
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
                        value="https://www.instagram.com/dean.kjr/"
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
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="hidden" ref={openref4}></Button>
        </DrawerTrigger>
        <DrawerContent className="bg-black-500 h-full w-full">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-white font-bold">X</DrawerTitle>
              <DrawerDescription className="text-white"></DrawerDescription>
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
                        placeholder="k.dean.1420354"
                        value="N/A"
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
    </nav>
  );
};

export default Navbar;
