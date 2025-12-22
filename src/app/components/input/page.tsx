import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";
import { ComponentPreview } from "@/components/docs/component-preview";
import { VERSION } from "@/lib/version";
import { PasswordInputDemo } from "./password-input-demo";
import { Icon } from "@/components/ui/icon";

export default function InputPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold">Input</h1>
          <span className="text-sm text-muted-foreground">{VERSION}</span>
        </div>
        <p className="text-lg text-muted-foreground">
          Input fields allow users to enter and edit text. Use appropriate types and validation for better UX.
        </p>
      </div>

      <Tabs defaultValue="examples" className="space-y-8">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-8">
          <ComponentPreview title="Default Input">
            <input
              type="text"
              placeholder="Enter text..."
              className="flex h-11 w-full max-w-sm rounded-lg border border-input bg-white px-4 py-3 font-secondary text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-border-focused"
            />
          </ComponentPreview>

          <CodeBlock
            code={`<input
  type="text"
  placeholder="Enter text..."
  className="flex h-11 w-full rounded-lg border border-input bg-white px-4 py-3 font-secondary text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-border-focused"
/>`}
            language="tsx"
          />

          <ComponentPreview title="With Label">
            <div className="space-y-2 max-w-sm">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="flex h-11 w-full rounded-lg border border-input bg-white px-4 py-3 font-secondary text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-border-focused"
              />
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<div className="space-y-2">
  <label htmlFor="email" className="text-sm font-medium">
    Email
  </label>
  <input
    id="email"
    type="email"
    placeholder="you@example.com"
    className="flex h-11 w-full rounded-lg border border-input bg-white px-4 py-3 font-secondary text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-border-focused"
  />
</div>`}
            language="tsx"
          />

          <ComponentPreview title="Disabled">
            <input
              type="text"
              placeholder="Disabled input"
              disabled
              className="flex h-11 w-full max-w-sm rounded-lg border border-input bg-white px-4 py-3 font-secondary text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </ComponentPreview>

          <CodeBlock
            code={`<input
  type="text"
  placeholder="Disabled input"
  disabled
  className="flex h-11 w-full rounded-lg border border-input bg-white px-4 py-3 font-secondary text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
/>`}
            language="tsx"
          />

          <ComponentPreview title="With Error">
            <div className="space-y-2 max-w-sm">
              <label htmlFor="error-input" className="text-sm font-medium">
                Username
              </label>
              <input
                id="error-input"
                type="text"
                className="flex h-11 w-full rounded-lg border border-destructive bg-white px-4 py-3 font-secondary text-sm focus-visible:outline-none focus-visible:border-destructive"
              />
              <p className="text-sm text-destructive">Username is required</p>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`<div className="space-y-2">
  <label htmlFor="error-input" className="text-sm font-medium">
    Username
  </label>
  <input
    id="error-input"
    type="text"
    className="flex h-11 w-full rounded-lg border border-destructive bg-white px-4 py-3 font-secondary text-sm focus-visible:outline-none focus-visible:border-destructive"
  />
  <p className="text-sm text-destructive">Username is required</p>
</div>`}
            language="tsx"
          />

          <ComponentPreview title="Password">
            <PasswordInputDemo />
          </ComponentPreview>

          <CodeBlock
            code={`"use client"

import { useState } from "react"
import { Icon } from "@/components/ui/icon"

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative flex items-center">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        className="flex h-11 w-full rounded-lg border border-input bg-white px-4 py-3 pr-10 font-secondary text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-border-focused"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 flex h-4 w-4 items-center justify-center text-icon"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        <Icon 
          icon={showPassword ? "visibility_off" : "visibility"} 
          size={20} 
          className="text-icon" 
        />
      </button>
    </div>
  )
}`}
            language="tsx"
          />

          <ComponentPreview title="Currency (Left Icon)">
            <div className="space-y-2 max-w-sm">
              <label htmlFor="amount" className="text-sm font-medium">
                Amount
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 flex items-center justify-center text-icon">
                  <Icon icon="attach_money" size={20} className="text-icon" />
                </span>
                <input
                  id="amount"
                  type="text"
                  className="flex h-11 w-full rounded-lg border border-input bg-white pl-12 pr-4 py-3 font-secondary text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-border-focused"
                />
              </div>
            </div>
          </ComponentPreview>

          <CodeBlock
            code={`import { Icon } from "@/components/ui/icon"

<div className="relative flex items-center">
  <span className="absolute left-4 flex items-center justify-center text-icon">
    <Icon icon="attach_money" size={20} className="text-icon" />
  </span>
  <input
    type="text"
    className="flex h-11 w-full rounded-lg border border-input bg-white pl-12 pr-4 py-3 font-secondary text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-border-focused"
  />
</div>`}
            language="tsx"
          />
        </TabsContent>

        <TabsContent value="usage" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Guidelines</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Labels</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Always provide a visible label for inputs. Labels should be concise and describe the expected input.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Placeholders</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Use placeholders to show example input, not as a replacement for labels. Placeholders disappear when typing.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Validation</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Show validation errors below the input with clear, actionable messages. Use the destructive color for error states.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Props</h2>
            <p className="mb-4 text-muted-foreground">
              Input accepts all standard HTML input attributes plus custom styling classes.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Prop</th>
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Default</th>
                    <th className="py-3 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">type</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">&quot;text&quot;</td>
                    <td className="py-3">Input type (text, email, password, number, etc.)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">placeholder</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Placeholder text shown when empty</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">value</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Controlled input value</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">defaultValue</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Default value for uncontrolled input</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">onChange</td>
                    <td className="py-3 font-mono">function</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Callback when value changes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">disabled</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">false</td>
                    <td className="py-3">Disable the input</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">required</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">false</td>
                    <td className="py-3">Mark input as required</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">readOnly</td>
                    <td className="py-3 font-mono">boolean</td>
                    <td className="py-3">false</td>
                    <td className="py-3">Make input read-only</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">maxLength</td>
                    <td className="py-3 font-mono">number</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Maximum character length</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">pattern</td>
                    <td className="py-3 font-mono">string</td>
                    <td className="py-3">-</td>
                    <td className="py-3">Regex pattern for validation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Input Types</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left font-medium">Type</th>
                    <th className="py-3 text-left font-medium">Description</th>
                    <th className="py-3 text-left font-medium">Use Case</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">text</td>
                    <td className="py-3">Single-line text input</td>
                    <td className="py-3">Names, titles, general text</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">email</td>
                    <td className="py-3">Email address input with validation</td>
                    <td className="py-3">Email fields</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">password</td>
                    <td className="py-3">Masked text input</td>
                    <td className="py-3">Password fields</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">number</td>
                    <td className="py-3">Numeric input with spinners</td>
                    <td className="py-3">Quantities, amounts</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">tel</td>
                    <td className="py-3">Phone number input</td>
                    <td className="py-3">Phone fields</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-mono text-foreground">search</td>
                    <td className="py-3">Search input with clear button</td>
                    <td className="py-3">Search bars</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
