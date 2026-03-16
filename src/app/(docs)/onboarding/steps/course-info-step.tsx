"use client"
import type { FormData } from "../Onboardingform"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { UploadCloud } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import supabaseClient from "@/lib/supabase"
import { useSession, useUser } from "@clerk/nextjs"
import { v4 as uuidv4 } from 'uuid';

interface CourseInfoStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  nextStep: () => void
  prevStep: () => void
}

export default function CourseInfoStep({ formData, updateFormData, nextStep, prevStep }: CourseInfoStepProps) {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isNewFile, setIsNewFile] = useState<boolean>(false);
  const [loading,setLoading] = useState(false);

  const { session } = useSession();
  const { user } = useUser();
  
  const handleSubmit = async(e: React.FormEvent) => {
    if(loading) return;
    setLoading(true);
    e.preventDefault();
    const supabase = supabaseClient(session);
    
    if (formData.logo) {
      // Upload file first if it's a new file
      let error2 = null;
      if (file && isNewFile) {
        const uploadResult = await supabase.storage
          .from("onboarding")
          .upload(formData.logo, file);
        error2 = uploadResult.error;
      }

      // Then update the database
      const { error } = await supabase.from("teachers").update({
        ...formData,
        logo: formData.logo,
				expectedStudents:Number(formData.expectedStudents) as any, 
      }).eq("teacher", user?.id || "");

      if (error || error2) {
        console.log({ error, error2 });
        toast("There was an error adding your data. Please try again later...")
        return;
      }
      
      setLoading(false);
      nextStep()
    }
  }

  useEffect(() => {
    if (formData.logo && user?.id && !isNewFile) {
      console.log({ logo: formData.logo })
      const supabase = supabaseClient(session);
      
      // Only try to fetch existing logos (not new ones)
      const getLogoUrl = async () => {
        try {
          const { data, error } = await supabase.storage
            .from("onboarding")
            .createSignedUrl(`${formData.logo}`, 3600);
            
          if (error) {
            console.error("Error getting logo URL:", error);
            // If file doesn't exist, clear the logo reference
            updateFormData({ logo: null });
            return;
          }
          
          if (data?.signedUrl) {
            setLogoPreview(data.signedUrl);
            
            // Convert URL to File object for consistency
            try {
              const response = await fetch(data.signedUrl);
              const blob = await response.blob();
              const fileFromBlob = new File(
                [blob], 
                formData.logo?.split('/').pop() || 'logo', 
                { type: blob.type }
              );
              setFile(fileFromBlob);
            } catch (fetchError) {
              console.error("Error fetching logo file:", fetchError);
            }
          }
        } catch (err) {
          console.error("Error fetching logo:", err);
          // Clear logo reference if there's an error
          updateFormData({ logo: null });
        }
      };
      
      getLogoUrl();
    }
  }, [formData.logo, user?.id, session, isNewFile,updateFormData]); // Added dependencies

  async function removeLogo() {
    const supabase = supabaseClient(session);
    
    if (formData.logo && !isNewFile) {
      // Only try to remove if it exists in storage
      try {
        await supabase.storage
          .from("onboarding")
          .remove([formData.logo]);
      } catch (error) {
        console.error("Error removing logo:", error);
      }
    }
    
    // Always reset the local state
    setLogoPreview(null);
    setFile(null);
    setIsNewFile(false);
    updateFormData({ logo: null });
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile);
      setIsNewFile(true); // Mark as new file
      
      const fileExtension = selectedFile.type.split("/")[1];
      const id = uuidv4();
      updateFormData({ logo: `${user?.id}/logo${id}.${fileExtension}` });

      // Create preview URL from the actual file
      const reader = new FileReader()
      reader.onload = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="space-y-1 sm:space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold">Course Information</h2>
        <p className="text-sm text-gray-500">Tell us about the course you want to create.</p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div className="space-y-1 sm:space-y-2">
          <Label htmlFor="brandName">Brand Name</Label>
          <Input
            id="brandName"
            value={formData.brandName}
            onChange={(e) => updateFormData({ brandName: e.target.value })}
            placeholder="Your Course Brand"
            required
          />
        </div>

        <div className="space-y-1 sm:space-y-2">
          <Label htmlFor="logo">Brand Logo</Label>
          <div className="border-2 border-dashed rounded-lg p-3 sm:p-6 flex flex-col items-center justify-center">
            {logoPreview ? (
              <div className="flex flex-col items-center gap-2 sm:gap-4">
                <img
                  src={logoPreview || "/placeholder.svg"}
                  alt="Logo preview"
                  className="w-20 h-20 sm:w-32 sm:h-32 object-contain"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={removeLogo}
                  size="sm"
                  className="sm:text-base"
                >
                  Remove Logo
                </Button>
              </div>
            ) : (
              <>
                <UploadCloud className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400 mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm text-gray-500 mb-2">Drag and drop or click to upload</p>
                <Input id="logo" type="file" accept="image/*" onChange={handleLogoChange} className="hidden" />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("logo")?.click()}
                  size="sm"
                  className="sm:text-base"
                >
                  Select Logo
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <Label htmlFor="curriculum">Course Curriculum</Label>
          <Textarea
            id="curriculum"
            value={formData.curriculum}
            onChange={(e) => updateFormData({ curriculum: e.target.value })}
            placeholder="Describe your course curriculum, modules, and learning objectives..."
            className="min-h-[100px] sm:min-h-[150px]"
            required
          />
        </div>
      </div>

      <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-4">
        <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
          Back
        </Button>
        <Button type="submit" className="flex-1" disabled={loading}>
          Continue
        </Button>
      </div>
    </form>
  )
}