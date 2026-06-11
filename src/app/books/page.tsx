export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { MainLayoutClient, BooksClient } from "@/app/PageLoaders";

export const metadata: Metadata = {
  title: "All Books | Books Era",
  description: "Browse our book collection.",
};

export default function Page() {
  return (
    <MainLayoutClient>
      <BooksClient />
    </MainLayoutClient>
  );
}
