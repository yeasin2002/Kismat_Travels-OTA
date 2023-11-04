import React from "react";
import AdminLayout from "$components/Admin/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "shadcn/components/ui/tabs";
import ProfitPage from "$components/Admin/Payment/Profit/ProfitPage";

const index = () => {
  return (
    <AdminLayout>
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
