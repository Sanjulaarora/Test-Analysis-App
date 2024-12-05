'use client';

import React from 'react';
import { BarChart, FileBadge, File } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CartesianGrid, Line, LineChart, XAxis, Pie, PieChart } from 'recharts';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

export default function Home() {
  const [progressBars, setProgressBars] = React.useState([
    {
      subject: 'HTML Tools, Forms, History',
      progress: 70,
    },
    {
      subject: 'Tags & References in HTML',
      progress: 50,
    },
    {
      subject: 'Tables & References in HTML',
      progress: 14,
    },
    {
      subject: 'Tables & CSS Basics',
      progress: 86,
    },
  ]);

  React.useEffect(() => {
    const timers = progressBars.map((_, index) =>
      setTimeout(() => {
        setProgressBars((prev) => prev.map((value, i) => i === index ? {...value, progress:Math.min(value.progress + 10, 100)} : value ));
      }, 500 * (index + 1))
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const pieChartData = [
    { describe: 'Correctly Attempted', number: 12, fill: 'var(--color-correctlyAttempted)' },
    { describe: 'Skipped or Incorrectly Attempted', number: 3, fill: 'var(--color-incorrectlyAttempted)' },
  ]
  
  const chartConfig = {
    correctlyAttempted: {
      label: 'Correctly Attempted',
      color: 'hsl(var(--chart-1))',
    },
    incorrectlyAttempted: {
      label: 'Skipped or Incorrectly Attempted',
      color: 'hsl(var(--chart-2))',
    },
  }

  const barChartData = [
    { percentile: '0', desktop: 0, mobile: 0 },
    { percentile: '25', desktop: 14, mobile: 8 },
    { percentile: '50', desktop: 60, mobile: 40 },
    { percentile: '75', desktop: 35, mobile: 25 },
    { percentile: '100', desktop: 28, mobile: 28 },
  ]

  const barChartConfig = {
    views: {
      label: 'Percentile Scored',
    },
    desktop: {
      label: 'Desktop',
      color: 'hsl(var(--chart-1))',
    },
    mobile: {
      label: 'Mobile',
      color: 'hsl(var(--chart-2))',
    },
  }

  const [activeChart, setActiveChart] = React.useState('desktop');

  return (
    <main className='flex mx-5'>
      <nav className='w-[16%] border-gray-300 border-solid border-r-[1px] mx-3 media769:mx-4 hidden media769:block'>
        <div>
          <ul className='flex flex-col space-y-8 mt-20'>
            <li className='flex'>
              <BarChart className='w-3 media769:w-6'/>
              <span className='ml-1 media769:ml-2 text-slate-500 font-bold text-sm media769:text-lg'>Dashboard</span>
            </li>
            <li className='flex'>
              <FileBadge className='w-3 media769:w-6'/>
              <span className='ml-1 media769:ml-2 text-slate-500 font-bold text-sm media769:text-lg'>Skill Test</span>
            </li>
            <li className='flex'>
              <File className='w-3 media769:w-6'/>
              <span className='ml-1 media769:ml-2 text-slate-500 font-bold text-sm media769:text-lg'>Internship</span>
            </li>
          </ul>
        </div>
      </nav>

      <nav className='media769:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md z-50 h-10 p-2'>
        <ul className='flex justify-around'>
          <li className='flex'>
            <BarChart className='w-3 media590:w-6'/>
            <span className='ml-1 media590:ml-2 text-slate-500 font-bold text-sm media590:text-base'>Dashboard</span>
          </li>
          <li className='flex'>
            <FileBadge className='w-3 media590:w-6'/>
            <span className='ml-1 media590:ml-2 text-slate-500 font-bold text-sm media590:text-base'>Skill Test</span>
          </li>
          <li className='flex'>
            <File className='w-3 media590:w-6'/>
            <span className='ml-1 media590:ml-2 text-slate-500 font-bold text-sm media590:text-base'>Internship</span>
          </li>
        </ul>
      </nav>


      <div className='max-w-full media769:w-[84%] grid grid-cols-1 xl:grid-cols-2 mx-auto media769:mx-0'>
        <div className='mt-8 ml-4 media769:ml-8 w-[320px] media590:w-[500px] media769:w-[680px]'>
          <p className='text-gray-800 text-[12px] media590:text-base'>Skill Test</p>
          <div className='mt-7 media769:mt-9 border-gray-300 border-solid border-[1px] rounded-md p-[5px]'>
            <div className='flex mb-8 mt-5'>
              <Image src='/html.png' alt='htmlImage' objectFit='contain' width={60} height={60} />
              <div className='mx-1 media769:mx-2'>
                <p className='font-bold mt-2 text-[10px] media590:text-sm media769:text-base'>Hyper Text Markup Language</p>
                <p className='text-gray-600 mt-1 text-[8px] media590:text-[12px] media769:text-base'>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant='primary' className='p-3 media590:p-6 ml-2 media769:ml-4 bg-blue-950 text-white w-12 media590:w-16 media769:w-24 h-5 media590:h-9 media769:h-12 text-[8px] media590:text-base'>Update</Button>
                </PopoverTrigger>
                <PopoverContent className='w-[310px] media590:w-[350px] media769:w-[520px] h-[230px] media769:h-[330px]'>
                  <div className='grid gap-2 media769:gap-4'>
                    <div className='flex justify-evenly media769:justify-between items-center'>
                      <h4 className='font-bold text-[12px] media590:text-base media769:text-lg'>Update Scores</h4>
                      <Image src='/html.png' alt='htmlImage' objectFit='contain' width={50} height={50} />
                    </div>
                    <div className='grid gap-2 media769:gap-7'>
                      <div className='flex items-center'>
                        <div className='flex items-center'>
                          <span className='bg-blue-950 text-white rounded-full w-6 media769:w-8 h-6 media769:h-8 text-[12px] media769:text-base text-center p-1'>1</span> 
                          <Label htmlFor='rank' className='w-48 media690:w-56 media769:w-80 ml-1 media769:ml-2 text-[10px] media590:text-[12px] media769:text-[16px]'>Update your <span className='font-bold'>Rank</span></Label>
                        </div>
                        <Input id='rank' defaultValue='1' className='w-12 media590:w-16 media769:w-28 h-6 media769:h-8 text-[11px] media590:text-base'/>
                      </div>
                      <div className='flex items-center'>
                        <div className='flex items-center'>
                          <span className='bg-blue-950 text-white rounded-full w-6 media769:w-8 h-6 media769:h-8 text-[12px] media769:text-base text-center p-1'>2</span> 
                          <Label htmlFor='percentile' className='w-48 media690:w-56 media769:w-80 ml-1 media769:ml-2 text-[10px] media590:text-[12px] media769:text-[16px]'>Update your <span className='font-bold'>Percentile</span></Label>
                        </div>
                        <Input id='percentile' defaultValue='90%' className='w-12 media590:w-16 media769:w-28 h-6 media769:h-8 text-[11px] media590:text-base'/>
                      </div>
                      <div className='flex items-center'>
                        <div className='flex items-center'>
                          <span className='bg-blue-950 text-white rounded-full w-6 media769:w-8 h-6 media769:h-8 text-[12px] media769:text-base text-center p-1'>3</span> 
                          <Label htmlFor='currentScore' className='w-48 media690:w-56 media769:w-80 ml-1 media769:ml-2 text-[10px] media590:text-[12px] media769:text-[16px]'>Update your <span className='font-bold'>Current Score (out of 15)</span></Label>
                        </div>
                        <Input id='currentScore' defaultValue='12' className='w-12 media590:w-16 media769:w-28 h-6 media769:h-8 text-[11px] media590:text-base'/>
                      </div>
                      <Button variant='primary' className='p-3 media769:p-6 ml-[220px] media590:ml-[250px] media769:ml-96 bg-blue-950 text-white w-12 media590:w-16 media769:w-24 h-4 media590:h-9 media769:h-12 text-[8px] media590:text-base'>Save</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>


          <div className='mt-5 border-gray-300 border-solid border-[1px] rounded-md p-2'>
            <div className='p-2'>
              <p className='font-bold text-[10px] media590:text-sm media769:text-base'>Quick Statictics</p>
              <div className='flex justify-evenly my-4'>
                <div className='flex border-gray-400 border-solid border-r-[1px]'>
                  <p className='h-7 media590:h-9 media769:h-12 w-7 media590:w-9 media769:w-12 bg-gray-300 rounded-full text-center media590:pt-2 media769:pt-3'>🏆</p>
                  <div className='mx-2 media590:mx-4'>
                    <p className='font-bold text-[12px] media590:text-base media769:text-lg'>1</p>
                    <p className='text-gray-500 text-[6px] media590:text-[10px] media769:text-[14px]'>YOUR RANK</p>
                  </div>
                </div>
                <div className='flex border-gray-400 border-solid border-r-[1px] mx-[2px]'>
                  <p className='h-7 media590:h-9 media769:h-12 w-7 media590:w-9 media769:w-12 bg-gray-300 rounded-full text-center media590:pt-2 media769:pt-3'>📝</p>
                  <div className='mx-1 media590:mx-4'>
                    <p className='font-bold text-[12px] media590:text-base media769:text-lg'>90%</p>
                    <p className='text-gray-500 text-[6px] media590:text-[10px] media769:text-[14px]'>PERCENTILE</p>
                  </div>
                </div>
                <div className='flex ml-[2px]'>
                  <p className='h-7 media590:h-9 media769:h-12 w-7 media590:w-9 media769:w-12 bg-gray-300 rounded-full text-center media590:pt-2 media769:pt-3'>✅</p>
                  <div className='mx-1 media590:mx-4'>
                    <p className='font-bold text-[12px] media590:text-base media769:text-lg'>12/15</p>
                    <p className='text-gray-500 text-[6px] media590:text-[10px] media769:text-[14px]'>CORRECT ANSWERS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='mt-5 border-gray-300 border-solid border-[1px] rounded-md p-6'>
            <p className='font-bold text-[10px] media590:text-sm media769:text-base'>Comparison Graph</p>
            <div className='flex mt-3'>
              <div>
                <p className='text-gray-700 text-[10px] media590:text-sm media769:text-base'><span className='text-gray-700 font-bold'>You scored 90% percentile </span>which is lower than the.</p>
                <p className='text-gray-700 text-[10px] media590:text-sm media769:text-base'>average percentile 72%, of all the engineers who took this assessment.</p>
              </div>
              <p className='h-6 media590:h-9 media769:h-12 w-7 media590:w-9 media769:w-12 bg-gray-300 rounded-full text-center media590:pt-2 media769:pt-3'>📝</p>
            </div>
            <div className='mt-5'>
              <div className='px-2 sm:p-6'>
                <ChartContainer config={barChartConfig} className='aspect-auto h-[260px] w-full'>
                  <LineChart accessibilityLayer data={barChartData} margin={{ left: 12, right: 12, }}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey='percentile' tickLine={false} axisLine={false} tickMargin={8} minTickGap={32}/>
                    <ChartTooltip content={ <ChartTooltipContent className='w-[150px]' nameKey='views' /> } />
                    <Line dataKey={activeChart} type='monotone' stroke={`var(--color-${activeChart})`} strokeWidth={2} dot={false} />
                 </LineChart>
               </ChartContainer>
             </div>
            </div>
          </div>
        </div>


        <div className='mt-6 media769:mt-20 ml-4 media769:ml-40 w-[320px] media590:w-[500px] media769:w-[400px]'>
          <div className='mt-3 border-gray-300 border-solid border-[1px] rounded-md p-6'> 
            <p className='font-bold text-[10px] media590:text-sm media769:text-base'>Syllabus Wise Analysis</p>
            {progressBars.map((progressBar, index) => (
              <div className='my-2 media590:my-4 media769:my-8 mx-2' key={index}>
                <p className='text-gray-700 text-[10px] media590:text-sm media769:text-base'>{progressBar.subject}</p>
                <div className='flex'>
                  <Progress key={index} value={progressBar.progress} className='w-[75%] my-4 h-2' />
                  <span className='text-gray-700 font-bold mt-3 media590:mt-2 ml-3 media590:ml-7 text-[10px] media590:text-sm media769:text-base'>{progressBar.progress} %</span>
                </div>
             </div>
            ))}  
          </div>


          <div className='flex flex-col mt-3 border-gray-300 border-solid border-[1px] rounded-md pt-3 pb-4'>
            <CardHeader>
              <CardTitle className='flex justify-between'>
                <p className='font-bold text-[10px] media590:text-sm media769:text-base'>Question Analysis</p>
                <p className='font-bold text-blue-700 text-[10px] media590:text-sm media769:text-base'>12/15</p>
              </CardTitle>
              <CardDescription className='text-gray-700 text-[10px] media590:text-sm media769:text-base'><span className='font-bold'>You have scored 12 questions correct out of 15.</span> However it still needs some improvements</CardDescription>
            </CardHeader>
            <CardContent className='flex-1 pb-0'>
              <ChartContainer config={chartConfig} className='mx-auto aspect-square max-h-[200px] media590:max-h-[250px]'>
                <PieChart>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Pie data={pieChartData} dataKey='number' nameKey='describe' innerRadius={60} strokeWidth={5}/>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </div>
        </div>
      </div> 
    </main>
  );
}
