import Hero from "@/components/GetInvoledSections/Hero";
import WhyBecomeMember from "@/components/GetInvoledSections/WhyBecomeMember";
import DonationBenefits from "@/components/GetInvoledSections/DonationBenefits";

export default function GetInvolvedPage(){
    return (
        <main aria-labelledby="get-involved-title">
            <Hero />
            <WhyBecomeMember />
            <DonationBenefits />
        </main>
    );
}