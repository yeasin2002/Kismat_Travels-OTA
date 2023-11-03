import React, { SVGProps } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
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
import { Input } from "shadcn/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "shadcn/components/ui/table";

interface Filter_list {
  value: string;
  label: string;
}
const status_list: Filter_list[] = [
  {
    label: "📃All",
    value: "All",
  },
  {
    label: "🟢Approved",
    value: "approved",
  },
  {
    label: "🔴Blocked",
    value: "blocked",
  },
  {
    label: "🟡Suspended",
    value: "suspended",
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
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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

export default function TableManual<T>() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const [pagination, setPagination] = React.useState({
    pageIndex: 0, // page index matlab = page number
    pageSize: 20, // page size matlab = limit
  });

  React.useEffect(() => {
    console.log(pagination);
  }, [pagination]);
  const input_filter = "email";
  const table = useReactTable({
    data: [],
    columns: columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    // manual pagination
    manualPagination: true,
    pageCount: 20,

    autoResetPageIndex: true,
    onPaginationChange: setPagination,
    // state
    // initialState.pagination: true ,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  if (
    table
      .getAllColumns()
      .map((column) => column.id)
      .indexOf(input_filter || "") === -1 &&
    input_filter
  ) {
    return (
      <div className="text-red relative w-full">
        <div className="mx-auto max-w-4xl">
          <div className="border-l-8 border-red-900 bg-red-50">
            <div className="flex items-center">
              <div className="p-2">
                <div className="flex items-center">
                  <div className="ml-2">
                    <svg
                      className="mr-2 h-8 w-8 cursor-pointer text-red-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="px-6 py-4 text-lg font-semibold text-red-900">
                    Please fix the following errors on Table
                  </p>
                </div>
                <div className="mb-4 px-16">
                  <li className="text-md text-sm font-bold text-red-500">{`⛔ Error : insert a input_filter index that don not exist on column`}</li>
                  <li className="text-md text-sm font-bold text-red-500">
                    Please Change <mark>input_filter</mark> value to any existing column name
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        {input_filter ? (
          <Input
            placeholder={`Filter ${input_filter}s...`}
            value={(table.getColumn(input_filter)?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn(input_filter)?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
        ) : (
          <div></div>
        )}

        <div className="flex w-full justify-end gap-3">
          {/* status filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="">
                Status <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {/* {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })} */}
              {status_list.map((status, index) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={index}
                    className="capitalize"
                    checked={
                      table.getColumn("status")?.getFilterValue() === status.value ||
                      table.getColumn("status")?.getFilterValue() === undefined
                    }
                    onCheckedChange={(value) =>
                      table
                        .getColumn("status")
                        ?.setFilterValue(
                          !value
                            ? (status.value !== "All" && status.value) || ""
                            : table.getColumn("status")?.getFilterValue()
                            ? (status.value !== "All" && status.value) || ""
                            : ""
                        )
                    }
                  >
                    {status.label}
                  </DropdownMenuCheckboxItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* column filter  */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size={"icon"} className="">
                <FluentColumnEdit20Regular className="text-xl" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
          selected.
        </div>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        <select
          // labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={table.getState().pagination.pageSize}
          // label="show items per page"
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[5, 10, 20, 40, 50, 100, 200, 500].map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export function FluentColumnEdit20Regular(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        d="M3 3.5a.5.5 0 0 1 .5-.5H4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1H4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-.5a.5.5 0 0 1-.5-.5ZM9 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h.475a3.17 3.17 0 0 0-.043.155L9.22 17H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6.943l-1 1V5a1 1 0 0 0-1-1H9Zm6 1v4.943l-1 1V5a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H16a1 1 0 0 0-1 1Zm-4.02 10.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      ></path>
    </svg>
  );
}
