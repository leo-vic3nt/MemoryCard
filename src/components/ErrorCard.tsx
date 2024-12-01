import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button.tsx';

interface Props {
    errorMessage: string;
}

function ErrorCard({ errorMessage }: Props) {
    return (
        <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-black bg-opacity-80">
            <Card className="w-1/2 min-w-72 max-w-[600px] border-2 border-slate-200 bg-green-900 text-center text-white">
                <CardHeader>
                    <CardTitle>{errorMessage} 😥</CardTitle>
                    <CardDescription className="text-white">
                        You can try again later, or click the button below to try again!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button
                        className="bg-white text-green-950 hover:bg-white hover:opacity-90"
                        onClick={() => window.location.reload()}
                    >
                        Reload
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default ErrorCard;
