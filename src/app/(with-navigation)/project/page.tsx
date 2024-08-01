import AddButton from './_components/add-button/AddButton';
import NoItem from './_components/project-item/NoItem';
import ProjectItem from './_components/project-item/ProjectItem';

export default function ProjectPage() {
  return (
    <div className="w-[60rem]">
      <AddButton />

      <div className="w-full flex flex-col gap-3">
        {list.length > 0 ? (
          <>
            {list.map((item) => (
              <ProjectItem key={item.project} {...item} />
            ))}
          </>
        ) : (
          <NoItem />
        )}
      </div>
    </div>
  );
}

const list = [
  {
    project:
      '사용자가 선호하는 차종, 시간대 등을 기반으로 예약을 추천 기능 추가가용성 정보를 제공하여 예약율 높이기실시사용자가 선호하는 차량 두두두두두두ㅜ',
    progress: 66,
  },
  {
    project: '자동 정비 알림 시스템',
    progress: 0,
  },
  {
    project: '사용자 커뮤니티 기능 강화 프로젝트',
    progress: 100,
  },
];
