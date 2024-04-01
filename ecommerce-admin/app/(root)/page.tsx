"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <div>
      <Modal
        title="Test"
        description="Test Description"
        isOpen={true}
        onClose={() => {}}
      >
        {" "}
      </Modal>
    </div>
  );
}
