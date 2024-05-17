import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const Skeleton = () => {
  return (
    <div className=" grid sm:grid-cols-3 gap-4 ">
      {[...Array(10)].map((movie, idx) => (
        <Card
          key={idx}
          className="overflow-hidden space-y-6 pb-4 lg:pb-10 animate-pulse"
        >
          <CardContent className="p-0">
            <div className="w-full object-cover aspect-[500/750]" />
          </CardContent>

          <CardTitle className="text-3xl px-4"> </CardTitle>

          <CardDescription className="px-4  h-20 text-pretty text-ellipsis overflow-hidden">
            {" "}
          </CardDescription>
        </Card>
      ))}
    </div>
  );
};

export default Skeleton;
