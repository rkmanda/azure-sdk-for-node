/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ComputeNode class.
 * @constructor
 * @summary A compute node in the Batch service.
 *
 * @member {string} [id] The id of the compute node.
 * 
 * @member {string} [url] The URL of the compute node.
 * 
 * @member {string} [state] The current state of the compute node. Possible
 * values include: 'idle', 'rebooting', 'reimaging', 'running', 'unusable',
 * 'creating', 'starting', 'waitingforstarttask', 'starttaskfailed',
 * 'unknown', 'leavingpool', 'offline'
 * 
 * @member {string} [schedulingState] Whether the compute node should be
 * available for task scheduling. Possible values include: 'enabled',
 * 'disabled'
 * 
 * @member {date} [stateTransitionTime] The time at which the compute node
 * entered its current state.
 * 
 * @member {date} [lastBootTime] The time at which the compute node was
 * started.
 * 
 * @member {date} [allocationTime] The time at which this compute node was
 * allocated to the pool.
 * 
 * @member {string} [ipAddress] The IP address that other compute nodes can
 * use to communicate with this compute node.
 * 
 * @member {string} [affinityId] An identifier which can be passed in the Add
 * Task API to request that the task be scheduled close to this compute node.
 * 
 * @member {string} [vmSize] The size of the virtual machine hosting the
 * compute node.
 * 
 * @member {number} [totalTasksRun] The total number of job tasks completed on
 * the compute node. This includes Job Preparation, Job Release and Job
 * Manager tasks, but not the pool start task.
 * 
 * @member {number} [runningTasksCount] The total number of currently running
 * job tasks on the compute node. This includes Job Preparation, Job Release,
 * and Job Manager tasks, but not the pool start task.
 * 
 * @member {number} [totalTasksSucceeded] The total number of job tasks which
 * completed successfully (with exitCode 0) on the compute node. This
 * includes Job Preparation, Job Release, and Job Manager tasks, but not the
 * pool start task.
 * 
 * @member {array} [recentTasks] The list of tasks that are currently running
 * on the compute node.
 * 
 * @member {object} [startTask] The task specified to run on the compute node
 * as it joins the pool.
 * 
 * @member {string} [startTask.commandLine] The command line does not run
 * under a shell, and therefore cannot take advantage of shell features such
 * as environment variable expansion. If you want to take advantage of such
 * features, you should invoke the shell in the command line, for example
 * using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
 * 
 * @member {array} [startTask.resourceFiles]
 * 
 * @member {array} [startTask.environmentSettings]
 * 
 * @member {boolean} [startTask.runElevated]
 * 
 * @member {number} [startTask.maxTaskRetryCount]
 * 
 * @member {boolean} [startTask.waitForSuccess]
 * 
 * @member {object} [startTaskInfo] Runtime information about the execution of
 * the start task on the compute node.
 * 
 * @member {string} [startTaskInfo.state] Possible values include: 'running',
 * 'completed'
 * 
 * @member {date} [startTaskInfo.startTime]
 * 
 * @member {date} [startTaskInfo.endTime]
 * 
 * @member {number} [startTaskInfo.exitCode] This parameter is returned only
 * if the task is in the completed state. The exit code for a process
 * reflects the specific convention implemented by the application developer
 * for that process. If you use the exit code value to make decisions in your
 * code, be sure that you know the exit code convention used by the
 * application process. Note that the exit code may also be generated by the
 * compute node operating system, such as when a process is forcibly
 * terminated.
 * 
 * @member {object} [startTaskInfo.schedulingError]
 * 
 * @member {string} [startTaskInfo.schedulingError.category] Possible values
 * include: 'usererror', 'servererror', 'unmapped'
 * 
 * @member {string} [startTaskInfo.schedulingError.code]
 * 
 * @member {string} [startTaskInfo.schedulingError.message]
 * 
 * @member {array} [startTaskInfo.schedulingError.details]
 * 
 * @member {number} [startTaskInfo.retryCount]
 * 
 * @member {date} [startTaskInfo.lastRetryTime]
 * 
 * @member {array} [certificateReferences] The list of certificates installed
 * on the compute node.
 * 
 * @member {array} [errors] The list of errors that are currently being
 * encountered by the compute node.
 * 
 */
function ComputeNode() {
}

/**
 * Defines the metadata of ComputeNode
 *
 * @returns {object} metadata of ComputeNode
 *
 */
ComputeNode.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ComputeNode',
    type: {
      name: 'Composite',
      className: 'ComputeNode',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        url: {
          required: false,
          serializedName: 'url',
          type: {
            name: 'String'
          }
        },
        state: {
          required: false,
          serializedName: 'state',
          type: {
            name: 'Enum',
            allowedValues: [ 'idle', 'rebooting', 'reimaging', 'running', 'unusable', 'creating', 'starting', 'waitingforstarttask', 'starttaskfailed', 'unknown', 'leavingpool', 'offline' ]
          }
        },
        schedulingState: {
          required: false,
          serializedName: 'schedulingState',
          type: {
            name: 'Enum',
            allowedValues: [ 'enabled', 'disabled' ]
          }
        },
        stateTransitionTime: {
          required: false,
          serializedName: 'stateTransitionTime',
          type: {
            name: 'DateTime'
          }
        },
        lastBootTime: {
          required: false,
          serializedName: 'lastBootTime',
          type: {
            name: 'DateTime'
          }
        },
        allocationTime: {
          required: false,
          serializedName: 'allocationTime',
          type: {
            name: 'DateTime'
          }
        },
        ipAddress: {
          required: false,
          serializedName: 'ipAddress',
          type: {
            name: 'String'
          }
        },
        affinityId: {
          required: false,
          serializedName: 'affinityId',
          type: {
            name: 'String'
          }
        },
        vmSize: {
          required: false,
          serializedName: 'vmSize',
          type: {
            name: 'String'
          }
        },
        totalTasksRun: {
          required: false,
          serializedName: 'totalTasksRun',
          type: {
            name: 'Number'
          }
        },
        runningTasksCount: {
          required: false,
          serializedName: 'runningTasksCount',
          type: {
            name: 'Number'
          }
        },
        totalTasksSucceeded: {
          required: false,
          serializedName: 'totalTasksSucceeded',
          type: {
            name: 'Number'
          }
        },
        recentTasks: {
          required: false,
          serializedName: 'recentTasks',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'TaskInformationElementType',
                type: {
                  name: 'Composite',
                  className: 'TaskInformation'
                }
            }
          }
        },
        startTask: {
          required: false,
          serializedName: 'startTask',
          type: {
            name: 'Composite',
            className: 'StartTask'
          }
        },
        startTaskInfo: {
          required: false,
          serializedName: 'startTaskInfo',
          type: {
            name: 'Composite',
            className: 'StartTaskInformation'
          }
        },
        certificateReferences: {
          required: false,
          serializedName: 'certificateReferences',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CertificateReferenceElementType',
                type: {
                  name: 'Composite',
                  className: 'CertificateReference'
                }
            }
          }
        },
        errors: {
          required: false,
          serializedName: 'errors',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ComputeNodeErrorElementType',
                type: {
                  name: 'Composite',
                  className: 'ComputeNodeError'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ComputeNode;
