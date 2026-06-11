export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { AdminLayoutClient, AdminDashboardClient } from "@/app/PageLoaders";

export const metadata: Metadata = {
  title: "Admin Dashboard | Books Era",
  description: "Books Era admin panel.",
};

export default function Page() {
  return (
    <AdminLayoutClient>
      <AdminDashboardClient />
    </AdminLayoutClient>
  );
}
