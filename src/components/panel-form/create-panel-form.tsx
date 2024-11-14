"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Select from "react-select";
import { createWeb } from "@/lib/action";
import { useToast } from "../ui/use-toast";
import { UpdateIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

// Schema validasi menggunakan Zod
const schema = z.object({
  websiteName: z
    .string()
    .min(1, { message: "Website name is required" })
    .max(50, { message: "Website name must be less than 50 characters" })
    .regex(/^[a-zA-Z0-9-]+$/, {
      message:
        "Website name can only contain alphanumeric characters and dashes",
    }),
  domainType: z.enum(["domain", "subdomain"], {
    errorMap: () => ({ message: "Please select a domain type" }),
  }),
});

type FormData = z.infer<typeof schema>;

const CreatePanelForm = () => {
  const [domainType, setDomainType] = useState<"domain" | "subdomain">(
    "domain",
  );

  const router = useRouter()

  const { toast } = useToast();
  // React Hook Form dan Zod Resolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Fungsi yang akan dijalankan ketika form disubmit
  const onSubmit = async (data: FormData) => {
    const response = await createWeb(data);
    if(response.success){
      toast({ description: response.message })
      router.push('/panel')
    }else{
      toast({ description: response.message, variant: "destructive" });
    } 
  };

  // Data untuk react-select
  const domainOptions = [
    { value: "domain", label: "Domain" },
    { value: "subdomain", label: "Subdomain" },
  ];

  // Handler untuk mengubah nilai domainType dari react-select
  const handleDomainTypeChange = (selectedOption: any) => {
    setValue("domainType", selectedOption?.value || "domain");
  };

  const handleWebsiteNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim(); // Trim spasi dari input
    setValue("websiteName", trimmedValue); // Update nilai di React Hook Form
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-semibold">
          Create Your Website
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Input Nama Website */}
          <div>
            <label
              htmlFor="websiteName"
              className="block text-sm font-medium text-gray-700"
            >
              Website Name
            </label>
            <input
              type="text"
              id="websiteName"
              placeholder="Your Website Name"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("websiteName")}
            />
            {errors.websiteName && (
              <span className="text-sm text-red-500">
                {errors.websiteName.message}
              </span>
            )}
          </div>

          {/* Pilihan Domain atau Subdomain dengan react-select */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Choose Domain Type
            </label>
            <Select
              options={domainOptions}
              onChange={handleDomainTypeChange}
              defaultValue={domainOptions.find(
                (option) => option.value === watch("domainType"),
              )}
              className="mt-2"
            />
            {errors.domainType && (
              <span className="text-sm text-red-500">
                {errors.domainType.message}
              </span>
            )}
          </div>

          {/* Tombol Submit */}
          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {isSubmitting ? (
                <UpdateIcon className="animate-spin text-white text-center" />
              ) : (
                "Create Website"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePanelForm;
