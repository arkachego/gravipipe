import { PipelineStage } from "mongoose";

const pipeline: PipelineStage[] = [
  {
    $addFields: {
      month: {
        $dateToString: {
          date: '$date',
          format: '%G-%m',
        },
      },
    },
  },
  {
    $unwind: '$items',
  },
  {
    $addFields: {
      total: {
        $multiply: [
          '$items.quantity',
          '$items.price',
        ],
      },
    },
  },
  {
    $group: {
      _id: {
        store: '$store',
        month: '$month',
      },
      store: {
        $first: '$store',
      },
      month: {
        $first: '$month',
      },
      totalRevenue: {
        $sum: '$total',
      },
      averagePrice: {
        $avg: '$items.price',
      },
    }
  },
  {
    $sort: {
      store: 1,
      month: 1,
    },
  },
  {
    $project: {
      _id: 0,
    },
  },
];

export default pipeline;
