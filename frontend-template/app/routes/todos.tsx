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
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🎯 Your Task</CardTitle>
            <CardDescription>
              Build a complete todo management application with the following features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Frontend Requirements:</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>✅ Create/Read/Update/Delete todos</li>
                  <li>✅ Mark todos as complete/incomplete</li>
                  <li>✅ Filter by status (pending, done, cancelled)</li>
                  <li>✅ Filter by priority (low, medium, high)</li>
                  <li>✅ Pagination with page numbers</li>
                  <li>✅ Loading and error states</li>
                  <li>✅ Responsive design</li>
                  <li>✅ Form validation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Backend Requirements:</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>🔧 Express.js REST API</li>
                  <li>🔧 MongoDB with Mongoose</li>
                  <li>🔧 CRUD endpoints for todos</li>
                  <li>🔧 Query parameters for filtering/pagination</li>
                  <li>🔧 Input validation and error handling</li>
                  <li>🔧 Proper HTTP status codes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Specification Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📋 API Specification</CardTitle>
            <CardDescription>
              Expected backend endpoints and data structure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Todo Data Model:</h4>
                <pre className="text-sm bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-x-auto">
{`{
  id: string,
  title: string,
  priority: "low" | "medium" | "high",
  status: "pending" | "done" | "cancelled",
  createdAt: Date,
  updatedAt: Date
}`}
                </pre>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Required Endpoints:</h4>
                <div className="space-y-2 text-sm font-mono">
                  <div><span className="text-green-600 font-bold">GET</span> /api/todos - Get todos with optional query params</div>
                  <div><span className="text-blue-600 font-bold">POST</span> /api/todos - Create new todo</div>
                  <div><span className="text-yellow-600 font-bold">PATCH</span> /api/todos/:id - Update existing todo</div>
                  <div><span className="text-red-600 font-bold">DELETE</span> /api/todos/:id - Delete todo</div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Query Parameters for GET /api/todos:</h4>
                <div className="space-y-1 text-sm">
                  <div><code>page</code> - Page number (default: 1)</div>
                  <div><code>limit</code> - Items per page (default: 10)</div>
                  <div><code>status</code> - Filter by status</div>
                  <div><code>priority</code> - Filter by priority</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Scaffold */}
        <Card>
          <CardHeader>
            <CardTitle>🚀 Get Started</CardTitle>
            <CardDescription>
              Start implementing your solution below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-3">📝 Steps to Complete:</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-yellow-800 dark:text-yellow-400">
                  <li>Set up your backend API with Express and MongoDB</li>
                  <li>Create the Todo model with Mongoose</li>
                  <li>Implement CRUD routes with proper validation</li>
                  <li>Add the frontend components and state management</li>
                  <li>Connect the frontend to your API endpoints</li>
                  <li>Test all functionality and edge cases</li>
                </ol>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Replace this placeholder with your implementation</strong>
                </p>
                <p className="text-sm text-gray-500">
                  This file currently contains only the scaffold. Build your todo management system here!
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">💡 Tips:</h4>
                <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-400">
                  <li>• Use the existing UI components from this template</li>
                  <li>• axios is already available for API calls</li>
                  <li>• Focus on clean, readable code</li>
                  <li>• Handle loading states and errors gracefully</li>
                  <li>• Make it responsive and user-friendly</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthenticatedLayout>
  );
}