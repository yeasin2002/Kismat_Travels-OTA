import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "shadcn/components/ui/dialog";
import { Input } from "shadcn/components/ui/input";
import { Label } from "shadcn/components/ui/label";
import { Button } from "shadcn/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "shadcn/components/ui/select";

import React, { useState } from "react";

const EditStatus = ({ Icon }: { Icon: any }) => {
  const [number, SetNumber] = useState("0");
  const [password, SetPassword] = useState("");

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Icon />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Status</DialogTitle>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="p">Profit Percentage</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Change The Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="apple">Turn Off</SelectItem>
                      <SelectItem value="banana">Live</SelectItem>
                      <SelectItem value="blueberry">Sandbox</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="Password">Password</Label>
                <Input
                  id="Password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    SetPassword(e.target.value);
                  }}
                />
              </div>
            </div>
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
