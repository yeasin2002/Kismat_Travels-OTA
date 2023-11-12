import { Button } from "shadcn/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "shadcn/components/ui/dialog";
import { Input } from "shadcn/components/ui/input";
import { Label } from "shadcn/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "shadcn/components/ui/select";

import { $post } from "$/utils";
import { useMutation } from "@tanstack/react-query";
import React, { ChangeEvent, FormEventHandler, useState } from "react";

const EditStatus = ({ Icon }: { Icon: any }) => {
  const [password, SetPassword] = useState("");
  const [status, setStatus] = useState("")


  const { mutateAsync } = useMutation({
    mutationFn: (val: any) => $post("/admin/payment/gateway", val),
    onSuccess: () => {
      console.log("Success");
    },
  });

  const updateGatewayStatus  = async (e : any) => {
     e.preventDefault();
     
    await mutateAsync({
      password: password,
      status: status,
    });
    
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Icon />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Status</DialogTitle>
            <form className="grid gap-4 py-4" onSubmit={updateGatewayStatus}>
              <div>
                <Label htmlFor="p">Change Status</Label>
                <Select
                  value={status}
           name="status"
                >
                  <SelectTrigger className="w-[180px] ">
                    <SelectValue placeholder="Change Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="apple">🔴 Turn Off</SelectItem>
                      <SelectItem value="banana">🟢 Live</SelectItem>
                      <SelectItem value="blueberry">🟡 Sandbox</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="Password">Password</Label>
                <Input
                  id="Password"
                  type="password"
                  name="password"
                  value={password}
                  
                />
              </div>
            </form>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditStatus;
