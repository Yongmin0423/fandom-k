import { cn } from '@utils/cn';
import { Link, Navigate, Outlet, useMatch } from 'react-router-dom';

const MonthlyChartTabs = () => {
  const maleMatch = useMatch('/main/male');
  const femaleMatch = useMatch('/main/female');
  const rootMatch = useMatch({
    path: '/main',
    end: true,
  });

  //처음 진입 시, 자동으로 이달의 여자 아이돌 선택
  if (rootMatch) {
    return <Navigate to='/main/female' replace />;
  }

  const tabs = [
    { label: '이달의 여자 아이돌', path: 'female', match: femaleMatch },
    { label: '이달의 남자 아이돌', path: 'male', match: maleMatch },
  ];

  return (
    <div className='flex h-full flex-col bg-black md:w-full'>
      <div className='sub-content-text flex h-[4.2rem] w-full items-center justify-between text-white'>
        {tabs.map(({ label, path, match }) => (
          <Link
            key={path}
            to={path}
            className={cn(
              'flex h-full w-1/2 items-center justify-center',
              match && 'border-b border-white bg-white/10',
            )}
          >
            <span>{label}</span>
          </Link>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MonthlyChartTabs;
