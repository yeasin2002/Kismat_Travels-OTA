import React from "react";
import Status from "$components/Admin/util/Status";
import AdminLayout from "$components/Admin/layout/MainLayout";
import Table from "$components/Table/TableManual";

import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "shadcn/components/ui/button";
import { Checkbox } from "shadcn/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "shadcn/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";

const data: Payment[] = [
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "Sabbir islam",
    total_booking: 10,
    status: "approved",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "Nahid Hasan",
    total_booking: 1,
    status: "blocked",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "Imam",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
  {
    id: "1",
    email: "nahidhasan1414@gmail.com",
    phone: "01741013363",
    name: "kawser",
    total_booking: 5,
    status: "suspended",
  },
];

export type Payment = {
  id: string;
  name: string;
  email: string;
  phone: string;
  total_booking: number;
  status: "approved" | "blocked" | "suspended";
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    // header: ({ column }) => {
    //   return (
    //     <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
    //       Email
    //       <ArrowUpDown className="ml-2 h-4 w-4" />
    //     </Button>
    //   );
    // },
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <p>
          {" "}
          {row.original.status === "approved" && "🟢"}
          {row.original.status === "blocked" && "🔴"}
          {row.original.status === "suspended" && "🟡"}
          {row.original.status}
        </p>
      );
    },
  },
  {
    accessorKey: "total_booking",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Booking
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p className="pl-10">{row.original.total_booking}</p>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const index = () => {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1200px] px-3 md:px-5">
        {/* {Table<Payment>({ columns: columns, data: data, input_filter: "phone" })} */}
        {/* <Table columns={columns} data={data} /> */}
      </div>
      <div className="relative grid w-full grid-cols-4">
        <Status />
      </div>
    </AdminLayout>
  );
};

export default index;
