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

import React, { useState } from "react";

const EditProfit = ({ Icon, FOR }: { Icon: any; FOR: "User" | "Agent" }) => {
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
            <DialogTitle>Edit Sell profit Percentage for {FOR}</DialogTitle>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="p">Profit Percentage</Label>
                <Input
                  id="p"
                  type="number"
                  value={number}
                  onFocus={() => {
                    SetNumber("");
                  }}
                  onChange={(e) => {
                    SetNumber(e.target.value);
                  }}
                />
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

export default EditProfit;
