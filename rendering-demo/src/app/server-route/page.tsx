import { ImageSlider } from "@/component/imageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoute() {
    const result = serverSideFunction();
    return (
        <div>
            <h1>Server Route</h1>
            <p>{result}</p>
            <ImageSlider />
        </div>
    );
}