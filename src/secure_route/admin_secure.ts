import axios from "axios";
const Admin_secure = async (ctx: any) => {
  try {
    const cookies = ctx.req.cookies;
    const res = await axios.post(process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/Admins/auth", {
      Headers: {
        key: cookies.key_ad,
        sessions: cookies.value_ad,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default Admin_secure;
