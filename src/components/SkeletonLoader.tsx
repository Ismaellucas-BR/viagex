
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-6 w-20" />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="bg-slate-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <Skeleton className="h-12 w-96 mx-auto mb-6" />
          <Skeleton className="h-6 w-2xl mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </div>

      {/* Destinations Skeleton */}
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-4 w-96 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow">
                <Skeleton className="h-48 w-full rounded-t-lg" />
                <div className="p-6">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-48 mb-4" />
                  <Skeleton className="h-8 w-20 mb-4" />
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Skeleton */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-8 w-64 mb-6" />
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-start space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-5 w-32 mb-2" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Skeleton className="h-96 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Testimonials Skeleton */}
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-48 mx-auto mb-6" />
            <Skeleton className="h-4 w-96 mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* CTA Skeleton */}
      <div className="py-16 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <Skeleton className="h-8 w-80 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto mb-8" />
          <Skeleton className="h-12 w-48 mx-auto" />
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <Skeleton className="h-6 w-24 mb-4 bg-slate-700" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20 bg-slate-700" />
                  <Skeleton className="h-4 w-16 bg-slate-700" />
                  <Skeleton className="h-4 w-24 bg-slate-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
