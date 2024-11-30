import { Button } from '@/components/ui/button.tsx';

function Footer() {
    return (
        <Button variant="link" className="mx-auto mb-2 w-fit border-0 text-slate-200" asChild>
            <a href="https://github.com/leo-vic3nt" target="_blank" rel="noopener noreferrer nofollow">
                @leo-vic3nt
            </a>
        </Button>
    );
}

export default Footer;
