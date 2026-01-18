import AboutCTA from '@/components/pages/aboutpage/AboutCTA';
import AboutHero from '@/components/pages/aboutpage/AboutHero';
import CoreValues from '@/components/pages/aboutpage/CoreValues';
import HistoryTimeline from '@/components/pages/aboutpage/HistoryTimeline';
import LifeAtDevConsult from '@/components/pages/aboutpage/LifeAtDevConsult';
import MeetExperts from '@/components/pages/aboutpage/MeetExperts';
import MissionStatement from '@/components/pages/aboutpage/MissionStatement';

export default function AboutPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <AboutHero />
      <MissionStatement />
      <CoreValues />
      <HistoryTimeline />
      <MeetExperts />
      <LifeAtDevConsult />
      <AboutCTA />
    </div>
  );
}
