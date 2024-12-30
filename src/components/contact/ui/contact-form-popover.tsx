import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ContactButton } from './contact-button';

export const ContactFormPopover = ({ form }: { form?: React.ReactNode }) => {
    return (
        <Popover>
            <PopoverTrigger>
                <ContactButton />
            </PopoverTrigger>
            <PopoverContent className="mr-0 w-96 max-w-[100vw] border-none bg-transparent p-0 md:mr-5">
                <div
                    className="mx-4 mb-4 flex flex-col overflow-hidden rounded-xl bg-zinc-800 shadow-2xl md:mx-0"
                    data-projection-id={1}
                >
                    <div className="bg-zinc-700 p-4">
                        <h2 className="text-sm font-bold text-zinc-200 md:text-xl">
                            Have a question? Drop in your message 👇
                        </h2>
                        <small className="mb-10 hidden text-xs text-zinc-400 md:block">
                            It won't take more than 10 seconds. Shoot your shot. 😉
                        </small>
                    </div>

                    {form}
                </div>
            </PopoverContent>
        </Popover>
    );
};
