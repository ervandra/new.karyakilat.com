"use client";

import * as React from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLeadCapture } from "@/components/lead-capture-context";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { CheckCircle2, MessageCircle } from "lucide-react";

interface FormData {
  nama: string;
  email: string;
  whatsapp: string;
  jenisUsaha: string;
  note: string;
}

interface FormErrors {
  nama?: string;
  email?: string;
  whatsapp?: string;
  jenisUsaha?: string;
}

export default function LeadCaptureModal() {
  const { isOpen, closeModal } = useLeadCapture();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>({
    nama: "",
    email: "",
    whatsapp: "",
    jenisUsaha: "",
    note: "",
  });
  const [errors, setErrors] = React.useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nama.trim()) {
      newErrors.nama = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^[0-9+\-\s]+$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Invalid number format";
    }

    if (!formData.jenisUsaha.trim()) {
      newErrors.jenisUsaha = "Profession / business type is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call - in production, send to backend
    console.log("Lead captured:", formData);
    
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    closeModal();
    // Reset form after modal closes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nama: "",
        email: "",
        whatsapp: "",
        jenisUsaha: "",
        note: "",
      });
      setErrors({});
    }, 200);
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                Create Your Microsite Now
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Tell us a bit about yourself so our team can build a microsite that fits your needs perfectly.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="nama">Full Name *</Label>
                <Input
                  id="nama"
                  placeholder="Your name"
                  value={formData.nama}
                  onChange={handleInputChange("nama")}
                  className={cn(errors.nama && "border-red-500")}
                />
                {errors.nama && (
                  <p className="text-xs text-red-500">{errors.nama}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  className={cn(errors.email && "border-red-500")}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                <Input
                  id="whatsapp"
                  placeholder="08xxxxxxxxxx"
                  value={formData.whatsapp}
                  onChange={handleInputChange("whatsapp")}
                  className={cn(errors.whatsapp && "border-red-500")}
                />
                {errors.whatsapp && (
                  <p className="text-xs text-red-500">{errors.whatsapp}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="jenisUsaha">Profession / Business Type *</Label>
                <Input
                  id="jenisUsaha"
                  placeholder="e.g. Property Agent, Freelancer, Small Business"
                  value={formData.jenisUsaha}
                  onChange={handleInputChange("jenisUsaha")}
                  className={cn(errors.jenisUsaha && "border-red-500")}
                />
                {errors.jenisUsaha && (
                  <p className="text-xs text-red-500">{errors.jenisUsaha}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="note">Notes (Optional)</Label>
                <textarea
                  id="note"
                  placeholder="Describe your business or requirements to speed up the onboarding process"
                  value={formData.note}
                  onChange={handleInputChange("note")}
                  rows={3}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Icons.logo className="h-5 w-5" />
                    Submit
                  </span>
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            
            <DialogTitle className="text-xl font-bold mb-2">
              Thank You!
            </DialogTitle>
            
            <DialogDescription className="text-muted-foreground mb-6">
              We've received your details and forwarded them to our team. We'll reach out to you via WhatsApp shortly.
            </DialogDescription>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" onClick={handleClose}>
                OK
              </Button>
              <Button asChild>
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
