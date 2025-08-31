export default function RoadmapSection() {
  return (
    <section id='roadmap' className='pb-12 md:pb-16'>
      <div className='mt-12 text-center'>
        <div className='bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8 max-w-4xl mx-auto'>
          <h3 className='text-2xl font-bold mb-6'>Join the Global Property Revolution</h3>
          <div className='grid gap-6 md:grid-cols-3 text-sm'>
            <div className='space-y-2'>
              <h4 className='font-semibold text-primary'>Strategic Partners</h4>
              <p className='text-muted-foreground'>Partners with international reach and market expertise</p>
            </div>
            <div className='space-y-2'>
              <h4 className='font-semibold text-primary'>Global Investors</h4>
              <p className='text-muted-foreground'>Investors seeking high-growth opportunities in stable markets</p>
            </div>
            <div className='space-y-2'>
              <h4 className='font-semibold text-primary'>Real Estate Professionals</h4>
              <p className='text-muted-foreground'>Agents and brokers connecting clients to Japanese properties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
