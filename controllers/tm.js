exports.getTermialnalList = async (req, res) => {
  if (req.body.filterData.type === 'A') {
    res.status(200).json({
      status: 200,
      payload: {
        recordsTotal: 31,
        recordsFiltered: 11,
        data: [
          {
            termId: 56,
            name: 'pjl_hh01',
            type: 'A',
            reason: 'Over Temp',
            tenantId: 6,
            usageDelay: 0,
            updatedBy: 'PATCH',
            createdBy: 'INIT',
            createdDate: 1521616448376,
            updatedDate: 1534351328346,
            flag: 'ACT'
          },
          {
            termId: 57,
            name: 'pjl_hh02',
            type: 'A',
            reason: 'Over Temp',
            tenantId: 7,
            usageDelay: 0,
            updatedBy: 'PATCH',
            createdBy: 'INIT',
            createdDate: 1521616448376,
            updatedDate: 1534351328346,
            flag: 'ACT'
          },
          {
            termId: 58,
            name: 'pjl_hh03',
            type: 'A',
            reason: 'Over Temp',
            tenantId: 8,
            usageDelay: 0,
            updatedBy: 'PATCH',
            createdBy: 'INIT',
            createdDate: 1521616448376,
            updatedDate: 1534351328346,
            flag: 'ACT'
          },
          {
            termId: 59,
            name: 'pjl_hh04',
            type: 'A',
            reason: 'Over Temp',
            tenantId: 9,
            usageDelay: 0,
            updatedBy: 'PATCH',
            createdBy: 'INIT',
            createdDate: 1521616448376,
            updatedDate: 1534351328346,
            flag: 'ACT'
          },
          {
            termId: 60,
            name: 'pjl_hh05',
            type: 'A',
            reason: 'Over Temp',
            tenantId: 10,
            usageDelay: 0,
            updatedBy: 'PATCH',
            createdBy: 'INIT',
            createdDate: 1521616448376,
            updatedDate: 1534351328346,
            flag: 'ACT'
          },
          {
            termId: 61,
            name: 'pjl_hh06',
            type: 'A',
            reason: 'Over Temp',
            tenantId: 11,
            usageDelay: 0,
            updatedBy: 'PATCH',
            createdBy: 'INIT',
            createdDate: 1521616448376,
            updatedDate: 1534351328346,
            flag: 'ACT'
          },
          {
            termId: 62,
            name: 'pjl_hh07',
            type: 'A',
            reason: 'Over Temp',
            tenantId: 12,
            usageDelay: 0,
            updatedBy: 'PATCH',
            createdBy: 'INIT',
            createdDate: 1521616448376,
            updatedDate: 1534351328346,
            flag: 'ACT'
          },
          {
            termId: 63,
            name: 'pjl_hh08',
            type: 'A',
            reason: 'Over Temp',
            tenantId: 13,
            usageDelay: 0,
            updatedBy: 'PATCH',
            createdBy: 'INIT',
            createdDate: 1521616448376,
            updatedDate: 1534351328346,
            flag: 'ACT'
          },
          {
            termId: 64,
            name: 'pjl_hh09',
            type: 'A',
            reason: 'Over Temp',
            tenantId: 14,
            usageDelay: 0,
            updatedBy: 'PATCH',
            createdBy: 'INIT',
            createdDate: 1521616448376,
            updatedDate: 1534351328346,
            flag: 'ACT'
          },
          {
            termId: 65,
            name: 'pjl_hh10',
            type: 'A',
            reason: 'Over Temp',
            tenantId: 15,
            usageDelay: 0,
            updatedBy: 'PATCH',
            createdBy: 'INIT',
            createdDate: 1521616448376,
            updatedDate: 1534351328346,
            flag: 'ACT'
          }
        ]
      }
    });
    return;
  }

  res.status(200).json({
    status: 200,
    payload: {
      recordsTotal: 31,
      recordsFiltered: 31,
      data: [
        {
          termId: 56,
          name: 'pjl_hh09',
          type: 'A',
          reason: 'Over Temp',
          tenantId: 6,
          usageDelay: 0,
          updatedBy: 'PATCH',
          createdBy: 'INIT',
          createdDate: 1521616448376,
          updatedDate: 1534351328346,
          flag: 'ACT'
        },
        {
          termId: 65,
          name: 'pjl_hh08',
          type: 'B',
          reason: 'Stuck',
          tenantId: 6,
          usageDelay: 0,
          updatedBy: 'INIT',
          createdBy: 'INIT',
          createdDate: 1522164864708,
          updatedDate: 1522164864708,
          flag: 'ACT'
        },
        {
          termId: 62,
          name: 'pjl_hh04',
          type: 'C',
          reason: 'Rat Attack',
          tenantId: 6,
          usageDelay: 0,
          updatedBy: 'INIT',
          createdBy: 'INIT',
          createdDate: 1522164864708,
          updatedDate: 1522164864708,
          flag: 'ACT'
        },
        {
          termId: 63,
          name: 'pjl_hh05',
          type: 'A',
          reason: 'Black Out',
          tenantId: 6,
          usageDelay: 0,
          updatedBy: 'INIT',
          createdBy: 'INIT',
          createdDate: 1522164864708,
          updatedDate: 1522164864708,
          flag: 'ACT'
        },
        {
          termId: 60,
          name: 'pjl_hh02',
          type: 'B',
          reason: 'Something Wrong',
          tenantId: 6,
          usageDelay: 0,
          updatedBy: 'INIT',
          createdBy: 'INIT',
          createdDate: 1522164864708,
          updatedDate: 1522164864708,
          flag: 'ACT'
        },
        {
          termId: 59,
          name: 'pjl_hh01',
          type: 'C',
          reason: 'Bad Quality',
          tenantId: 6,
          usageDelay: 0,
          updatedBy: 'INIT',
          createdBy: 'INIT',
          createdDate: 1522164864708,
          updatedDate: 1522164864708,
          flag: 'ACT'
        },
        {
          termId: 64,
          name: 'pjl_hh07',
          type: 'A',
          reason: 'Over Load',
          tenantId: 6,
          usageDelay: 0,
          updatedBy: 'INIT',
          createdBy: 'INIT',
          createdDate: 1522164864708,
          updatedDate: 1522164864708,
          flag: 'ACT'
        },
        {
          termId: 61,
          name: 'pjl_hh03',
          type: 'B',
          reason: 'Destroyed',
          tenantId: 6,
          usageDelay: 0,
          updatedBy: 'INIT',
          createdBy: 'INIT',
          createdDate: 1522164864708,
          updatedDate: 1522164864708,
          flag: 'ACT'
        },
        {
          termId: 67,
          name: 'pjl_hh11',
          type: 'C',
          reason: 'Bad Performance',
          tenantId: 6,
          usageDelay: 0,
          updatedBy: 'INIT',
          createdBy: 'INIT',
          createdDate: 1522164864708,
          updatedDate: 1522164864708,
          flag: 'ACT'
        },
        {
          termId: 66,
          name: 'pjl_hh10',
          type: 'A',
          reason: 'Something Wrong',
          tenantId: 6,
          usageDelay: 0,
          updatedBy: 'INIT',
          createdBy: 'INIT',
          createdDate: 1522164864708,
          updatedDate: 1522164864708,
          flag: 'ACT'
        }
      ]
    }
  });
};

exports.getEnumText = async (req, res) => {
  res.status(200).json({
    status: 200,
    payload: {
      ACT: 'Active',
      INA: 'Inactive'
    }
  });
};

exports.getEnumTextType = async (req, res) => {
  res.status(200).json({
    status: 200,
    payload: {
      B: 'Backoffice',
      G: 'Gate',
      H: 'Handheld',
      P: 'POS'
    }
  });
};

exports.getTerminalTypeList = async (req, res) => {
  // res.status(200).json({
  //   status: 200,
  //   payload: [
  //     {
  //       enum_value: 'G',
  //       text: 'Gate'
  //     },
  //     {
  //       enum_value: 'H',
  //       text: 'Handheld'
  //     },
  //     {
  //       enum_value: 'P',
  //       text: 'POS'
  //     }
  //   ]
  // });
  res.status(200).json({
    status: 200,
    payload: [
      {
        enum_value: 'A',
        text: 'Type A'
      },
      {
        enum_value: 'B',
        text: 'Type B'
      },
      {
        enum_value: 'C',
        text: 'Type C'
      }
    ]
  });
};
