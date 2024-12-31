import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Box, Typography as Text } from "@mui/material";
import type { ReactNode } from "react";

/* ------------------------------ Start ------------------------------*/
export default function Dashboard() {
  return (
    <Box className="bg-slate-300">
      <Box className="text-black border">
        <Text variant="h2" className="font-bold">
          &#128075; Hi, Fateh!
        </Text>
      </Box>
    </Box>
  );
}

Dashboard.getLayout = (page: ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);