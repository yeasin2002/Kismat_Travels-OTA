import React from "react";
import TableAuto from "$components/Admin/Booking/TableAuto";
import { useAllBookings } from "$hooks/admin/useAllBookings";
const Booked = () => {
  const { data, Reload, error, isLoading } = useAllBookings();
  return (
    <div className="relative w-full">
      <div className="relative w-full">
        <TableAuto data={data || []} />
      </div>
    </div>
  );
};

export default Booked;
