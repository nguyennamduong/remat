import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 grid grid-col-1 lg:grid-cols-2 gap-3">
      <div className="lg:col-span-2 flex flex-col gap-5">
        <p className="font-bold text-4xl">Do it ONCE…Do it RIGHT….Call us!!!</p>
        <p className="text-lg">REMAT LLC (<span className="font-semibold text-primary">Robotic Engineering, Maintenance, and Training</span>) is a growing South Carolina based company created in 2005 to provide BMW, and other South East companies, with professional automation services. These services are oriented toward their robotic needs (installation, programming, maintenance, and, training), and are focused to supply
          <span className="font-semibold text-primary"> “the highest and most ethical value at the right cost”</span>.
          We have been consistently challenged, evaluated, recommended, and used as a point of reference for “Great Service” by our main customer: BMW.
          We believe very strongly that REMAT LLC can provide you with the level of service you expect and deserve.</p>
        <div className="flex gap-4 self-center"><Button variant="outline">Learn more</Button>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
            </Button></div>

      </div>
      <div
        className="lg:col-span-2 flex flex-col gap-6"
      >

        <h1 className="text-3xl pt-4">Competitive advantage</h1>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_1.jpg" />
            </CardContent>
            <CardFooter>
              <p>Former KUKA/ABB employees being part of the training team.</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_2.jpeg" />
            </CardContent>
            <CardFooter>
              <p>Trainers involved with robotics installation, path programming, SSB level support, new application development.</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_3.jpg" />
            </CardContent>
            <CardFooter>
              <p>Mechanical, Electrical, and ,Troubleshooting.</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_4.jpg" />
            </CardContent>
            <CardFooter>
              <p>Knowledgeable of BMW’s new and old standards.</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_5.png" />
            </CardContent>
            <CardFooter>
              <p>Knowledgeable of BMW’s contacts and procedures.</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_6.jpg" />
            </CardContent>
            <CardFooter>
              <p>Currently on-site at BMW (supplying robotics training since 2005, among other things).</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_7.png" />
            </CardContent>
            <CardFooter>
              <p>Fast, flexible, and, adaptable to rapid changing needs and schedules.</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_8.jpeg" />
            </CardContent>
            <CardFooter>
              <p>Highly ethical/capable “proven track” record at BMW.</p>
            </CardFooter>
          </Card>

        </div>

      </div>
      <div
        className="lg:col-span-2 flex flex-col gap-6"
      >
        <h1 className="text-3xl pt-4">Experience with courseware development/ delivery</h1>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_7.png" />
            </CardContent>
            <CardFooter>
              <p>Have developed and revised robotics training presentations for BMW. (Including KUKA KRC2/KRC4, KUKA iiwa, ABB,FANUC, Durr, Universal)</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_7.png" />
            </CardContent>
            <CardFooter>
              <p>Part of the team in charge of new class development and structure in former job at KUKA.</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_7.png" />
            </CardContent>
            <CardFooter>
              <p>Currently delivering robotics training for BMW (since 2005, both KUKA and ABB…Basic, advance, electrical, and, mechanical. Also, FANUC, Durr, and, Universal robots). Including classes in Spanish.</p>
            </CardFooter>
          </Card>


          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_7.png" />
            </CardContent>
            <CardFooter>
              <p>Capable of delivering/developing training in English, and, Spanish. (KUKA/ABB/FANUC/UNIVERSAL/Durr).</p>
            </CardFooter>
          </Card>


        </div>

      </div>
      <div
        className="lg:col-span-2 flex flex-col gap-6"
      >
        <h1 className="text-3xl pt-4">BMW maintenance systems experience</h1>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_7.png" />
            </CardContent>
            <CardFooter>
              <p>Have participated in installations at BMW for E70, F15, F16, F25, G01/02, G05/06/07, G45.</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_7.png" />
            </CardContent>
            <CardFooter>
              <p>Has supplied ESA and SSB level support, and currently on call for issues that requires specialist knowledge.</p>
            </CardFooter>
          </Card>

        </div>
      </div>
      <div
        className="lg:col-span-2 flex flex-col gap-6"
      >
        <h1 className="text-3xl pt-4">Building and Rental of training cells</h1>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_7.png" />
            </CardContent>
            <CardFooter>
            <p>Approximate dimensions 7’x7’.</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_7.png" />
            </CardContent>
            <CardFooter>
            <p>Pre-drilled to accommodate a KUKA KR 16, ABB IRB 2400/16, or Fanuc M-20iA/12L. (instructor supplied)</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_7.png" />
            </CardContent>
            <CardFooter>
            <p>Capable of being picked up by a forklift from 2 sides and being transported on a truck.</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_7.png" />
            </CardContent>
            <CardFooter>
            <p>Fenced</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="" width={500} height={500} src="/home/competitive_advantage_7.png" />
            </CardContent>
            <CardFooter>
            <p>Training table and magazine.</p>
            </CardFooter>
          </Card>

        </div>
      </div>
    </main>
  );
}
