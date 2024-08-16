import React from 'react';
import {Card} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const ProjectTeam = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Team</h2>
            <p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The talented individuals behind our innovative solutions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
          <Card className="p-6 bg-background rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://avatars.githubusercontent.com/u/82497296?v=4" alt="Abdelrahman Mohammed"/>
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="text-center space-y-1">
                <h3 className="text-xl font-semibold">Abdelrahman Mohammed</h3>
                <p className="text-muted-foreground text-blue-200">Fullstack Developer</p>
                <p className="text-sm text-muted-foreground">
                  {"A wise man once said, \"you can always add more bugs to your code\""}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-background rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://avatars.githubusercontent.com/u/108352122?v=4" alt="Aryan Bhargav"/>
                <AvatarFallback>Aryan Bhargav</AvatarFallback>
              </Avatar>
              <div className="text-center space-y-1">
                <h3 className="text-xl font-semibold ">Aryan Bhargav</h3>
                <p className="text-muted-foreground text-red-200">Fullstack Developer</p>
                <p className="text-sm text-muted-foreground">
                  Waiting for him to come online to add his quote ...
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-background rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://avatars.githubusercontent.com/u/92212557?v=4" alt="Hibah Sindi"/>
                <AvatarFallback>HS</AvatarFallback>
              </Avatar>
              <div className="text-center space-y-1">
                <h3 className="text-xl font-semibold">Hibah Sindi</h3>
                <p className="text-muted-foreground text-green-200">UI/UX Designer</p>
                <p className="text-sm text-muted-foreground">
                  Why you guys never online ?
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-background rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://avatars.githubusercontent.com/u/135634123?v=4" alt="Shatha Dalhoumy"/>
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div className="text-center space-y-1">
                <h3 className="text-xl font-semibold">Shatha Dalhoumy</h3>
                <p className="text-muted-foreground text-yellow-200">Backend Developer</p>
                <p className="text-sm text-muted-foreground">
                  She is also offline ...
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectTeam;