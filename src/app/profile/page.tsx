export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { MainLayoutClient, ProfileClient } from "@/app/PageLoaders";

export const metadata: Metadata = {
  title: "My Profile | Books Era",
  description: "Manage your account.",
};

export default function Page() {
  return (
    <MainLayoutClient>
      <ProfileClient />
    </MainLayoutClient>
  );
}
