export const contentsConfig = [
  {
    id: 'moduleA',
    title: 'Neovascular AMD',
    pages: 
    [
        {
            id: 1,
            viewers: [{ name: 'fixed_slice_003.dcm', type: '2D' }],
            infoText: 'This series illustrates neovascular changes across axial slices.',
        },
        {
            id: 2,
            viewers: [{ name: '00000060', type: '3D' }],
            infoText: 'Comparison of follow-up scans showing progression.',
        },
        {
            id: 3,
            viewers: [{name: 'fixed_slice_003.dcm', type: '2D'}],
            infoText: 'Last page.'
        }
    ]
  },
];

export default contentsConfig;
