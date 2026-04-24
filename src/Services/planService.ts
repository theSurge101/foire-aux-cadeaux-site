// services/planService.ts
export interface PlanInfo {
  isReady: boolean;
  downloadUrl?: string;
  previewUrl?: string;
  fileName?: string;
  fileSize?: string;
  lastUpdated?: string;
}

export const PLAN_STATUS: PlanInfo = {
  isReady: false, // Set to true when plan is ready
  downloadUrl: '/plans/plan-fac-2026.pdf',
  previewUrl: '/plans/plan-fac-2026-preview.jpg',
  fileName: 'plan-foire-aux-cadeaux-2026.pdf',
  fileSize: '2.5 MB',
  lastUpdated: 'null'
};

export const isPlanReady = (): boolean => {
  return PLAN_STATUS.isReady;
};

export const getPlanInfo = (): PlanInfo => {
  return PLAN_STATUS;
};