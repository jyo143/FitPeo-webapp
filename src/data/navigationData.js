
import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  Clock, 
  BarChart3, 
  TestTube, 
  MessageCircle, 
  HelpCircle, 
  Settings 
} from 'lucide-react';

export const navigationLinks = [
  { title: 'Dashboard', icon: LayoutDashboard, active: true },
  { title: 'History', icon: History, active: false },
  { title: 'Calendar', icon: Calendar, active: false },
  { title: 'Appointments', icon: Clock, active: false },
  { title: 'Statistics', icon: BarChart3, active: false },
  { title: 'Tests', icon: TestTube, active: false },
  { title: 'Chat', icon: MessageCircle, active: false },
  { title: 'Support', icon: HelpCircle, active: false },
  { title: 'Setting', icon: Settings, active: false },
];
