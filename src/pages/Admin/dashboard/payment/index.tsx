import React from "react";
import AdminLayout from "$components/Admin/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn/components/ui/tabs";
import ProfitPage from "$components/Admin/Payment/Profit/ProfitPage";

import Admin_secure from "$Secure/admin_secure";

const index = (props: any) => {
  return (
    <AdminLayout User={props.User}>
      <div className="p-2 md:p-3">
        <div>
          {/* navigation  */}
          <Tabs defaultValue="profit" className="w-full">
            <TabsList>
              <TabsTrigger value="profit">Profit Setup</TabsTrigger>
              <TabsTrigger value="password">Payment Gateway</TabsTrigger>
            </TabsList>
            <TabsContent value="profit">
              <ProfitPage />
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </div>
    </AdminLayout>
  );
};

export default index;

// // This gets called on every request
export async function getServerSideProps(ctx: any) {
  // Pass data to the page via props
  try {
    const User = await Admin_secure(ctx);
    return { props: { User: User } };
  } catch (error) {
    return {
      redirect: {
        destination: "/Admin/auth/Login", // Specify the destination route
        permanent: false, // Set to true for a permanent (301) redirect, or false for a temporary (302) redirect
      },
    };
  }
}

// icons
