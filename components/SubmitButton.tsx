import { Button } from "./ui/button"
import Image from "next/image";
interface ButtonProps {
    children: React.ReactNode,
    className?: string,
    isLoading: boolean,
}

const SubmitButton = ({isLoading, className, children}: ButtonProps) => {
    return (
        <Button 
        disabled={isLoading}
        className={className ?? 'shad-primary-btn w-full'}
        type="submit">
            {/* if  isLoading is true, show a loading animation, 
            otherwise show the children(the normal button) */}

            {isLoading ? (
                <div className="flex
                items-center gap-4">
                    <Image
                    width={24}
                    height={24}
                    className="animate-spin"
                    src="/assets/icons/loader.svg" 
                    alt="loader "/>
                    Loading...
                </div>
            ):children
        }
        </Button>
    )
}

export default SubmitButton
