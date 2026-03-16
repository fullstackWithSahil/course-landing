import type { FormData } from "../Onboardingform"
import { CheckCircle } from "lucide-react"
import Pricing from "@/components/Pricing"

interface CompletionStepProps {
  formData: FormData
}

export default function CompletionStep({ formData }: CompletionStepProps) {
  return (
    <div className="space-y-4 sm:space-y-6 text-center">
      <div className="flex justify-center">
        <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500" />
      </div>

      <div className="space-y-1 sm:space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold">Onboarding Complete!</h2>
        <p className="text-sm text-gray-500">
          Thank you for providing your information, {formData.name}. Your course setup is almost ready. Just select your plan and our correspondant will contact you soon
        </p>
      </div>

      <div className="space-y-2 sm:space-y-4 text-left bg-gray-50 p-3 sm:p-4 rounded-lg">
        <h3 className="font-semibold text-sm sm:text-base">Summary:</h3>
        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
          <li>
            <span className="font-medium">Brand:</span> {formData.brandName}
          </li>
          <li>
            <span className="font-medium">Contact:</span> {formData.email}
          </li>
          <li>
            <span className="font-medium">Notification Method:</span> {formData.notificationMethod}
          </li>
          <li>
            <span className="font-medium">Location:</span> {formData.location}
          </li>
          <li>
            <span className="font-medium">Expected Students:</span> {formData.expectedStudents}
          </li>
        </ul>
      </div>
      <Pricing/>
    </div>
  )
}