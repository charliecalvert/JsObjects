# -*- encoding: UTF-8 -*-

''' Whole Body Motion: Left or Right Arm position control '''
''' This example is only compatible with NAO '''

import naoqi
import argparse
import motion
import time
from naoqi import ALProxy

def main(robotIP, PORT, chainName):
    ''' Example of a whole body Left or Right Arm position control
        Warning: Needs a PoseInit before executing
                 Whole body balancer must be inactivated at the end of the script
    '''

    motionProxy  = ALProxy("ALMotion", robotIP, PORT)
    postureProxy = ALProxy("ALRobotPosture", robotIP, PORT)

    # Wake up robot
    motionProxy.wakeUp()
    
    tts = ALProxy("ALTextToSpeech", "192.168.2.17", 9559)
    tts.say("Hello, I'm awake!")

    # Send robot to Stand Init
    #postureProxy.goToPosture("StandInit", 0.5)

    frame     = motion.FRAME_ROBOT
    useSensor = False

    effectorInit = motionProxy.getPosition(chainName, frame, useSensor)

    # Active LArm tracking
    isEnabled = True
    motionProxy.wbEnableEffectorControl(chainName, isEnabled)

    # Example showing how to set position target for LArm
    # The 3 coordinates are absolute LArm position in FRAME_ROBOT
    # Position in meter in x, y and z axis.

    # X Axis LArm Position feasible movement = [ +0.00, +0.12] meter
    # Y Axis LArm Position feasible movement = [ -0.05, +0.10] meter
    # Y Axis RArm Position feasible movement = [ -0.10, +0.05] meter
    # Z Axis LArm Position feasible movement = [ -0.10, +0.10] meter

    coef = 1.0
    if chainName == "LArm":
        coef = +1.0
    elif chainName == "RArm":
        coef = -1.0

    targetCoordinateList = [
    [ +0.12, +0.00*coef, +0.00], # target 0
    [ +0.12, +0.00*coef, -0.10], # target 1
    [ +0.12, +0.05*coef, -0.10], # target 1
    [ +0.12, +0.05*coef, +0.10], # target 2
    [ +0.12, -0.10*coef, +0.10], # target 3
    [ +0.12, -0.10*coef, -0.10], # target 4
    [ +0.12, +0.00*coef, -0.10], # target 5
    [ +0.12, +0.00*coef, +0.00], # target 6
    [ +0.00, +0.00*coef, +0.00], # target 7
    ]


    # wbSetEffectorControl is a non blocking function
    # time.sleep allow head go to his target
    # The recommended minimum period between two successives set commands is
    # 0.2 s.
    for targetCoordinate in targetCoordinateList:
        targetCoordinate = [targetCoordinate[i] + effectorInit[i] for i in range(3)]
        motionProxy.wbSetEffectorControl(chainName, targetCoordinate)
        time.sleep(4.0)

    # Deactivate Head tracking
    isEnabled    = False
    motionProxy.wbEnableEffectorControl(chainName, isEnabled)

    # Go to rest position
    motionProxy.rest()

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--ip", type=str, default="192.168.2.17",
                        help="Robot ip address")
    parser.add_argument("--port", type=int, default=9559,
                        help="Robot port number")
    parser.add_argument("--chain", type=str, default="LArm",
                        choices=["LArm", "RArm"], help="Chain name")

    args = parser.parse_args()
    main(args.ip, args.port, args.chain)
