import CardWrapper, { Card } from '@/ui/dashboard/cards';
import RevenueChart from '@/ui/dashboard/revenue-chart';
import LatestInvoices from '@/ui/dashboard/latest-invoices';
import { lusitana } from '@/ui/fonts';
import { fetchCardData } from '@/lib/data';
import { Suspense } from 'react';
import {
  CardSkeleton,
  InvoiceSkeleton,
  RevenueChartSkeleton,
} from '@/ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<InvoiceSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}