import { AuthenticatedLayout } from "~/components/layout/authenticated-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export default function TodosPage() {

  return (
    <AuthenticatedLayout>
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Todo Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Build a complete todo management system
          </p>
        </div>

        {/* Task Overview Card */}
        <Card>
          <CardHeader>
            <CardTitle>🎯 Your Task</CardTitle>
            <CardDescription>
              Build a complete todo management application with the following features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">IMPLEMENT FRONTEND REQUIREMENTS HERE</h4>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthenticatedLayout>
  );
}