import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    role: "",
    industry: "",
    experience: "",
    challenge: "",
    reason: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, capture data and redirect to Calendly
    const params = new URLSearchParams({
      name: formData.role,
      a1: formData.industry,
      a2: formData.experience,
    });
    // For now, show confirmation
    window.open(`https://calendly.com/?${params.toString()}`, "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">
            Begin Your <span className="text-primary">Ascent</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Share a few details so we can prepare for a meaningful conversation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label className="text-sm text-foreground">Current Role</Label>
            <Input
              placeholder="e.g., Director of Strategy"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="bg-background border-border focus:border-ring"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm text-foreground">Industry</Label>
              <Input
                placeholder="e.g., Technology"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="bg-background border-border focus:border-ring"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-foreground">Years of Experience</Label>
              <Input
                placeholder="e.g., 15+"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="bg-background border-border focus:border-ring"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-foreground">Leadership Challenge</Label>
            <Textarea
              placeholder="Briefly describe the challenge you're navigating..."
              value={formData.challenge}
              onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
              className="bg-background border-border focus:border-ring resize-none"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-foreground">Reason for Scheduling</Label>
            <Input
              placeholder="What prompted you to explore this?"
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="bg-background border-border focus:border-ring"
            />
          </div>

          <Button variant="hero" size="lg" type="submit" className="w-full text-base py-6">
            Continue to Booking
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            Your information is kept strictly confidential.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
