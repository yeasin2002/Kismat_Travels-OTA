import { POST } from "$lib/request";
import { useEffect, useState } from "react";
import cookie from "js-cookie";

export function useAllUser() {
  const [Load, SetLoad] = useState(false);
  const [Data, SetData] = useState<any>(null);
  const [Error, SetError] = useState<any>(false);
  const [Reload, SetReload] = useState(0);
  console.log("syaty");

  // !Auth?.key && !Auth?.sessions
  async function queryFn(): Promise<any> {
    try {
      console.log("fetch start");

      SetLoad(true);
      const { data } = await POST("/users", {
        Headers: {
          sessions: cookie.get("value_ad"),
          key: cookie.get("key_ad"),
        },
      });
      SetData(data);
      SetLoad(false);
      console.log("fetch end");
    } catch (error) {
      SetError(error);
      SetLoad(false);
    }
  }

  useEffect(() => {
    console.log("start");
    queryFn();
  }, [Reload]);

  return {
    data: Data,
    error: Error,
    Reload: () => {
      SetReload((e) => 1 + e);
    },
    isLoading: Load,
  };
}
